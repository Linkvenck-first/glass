<?php
/**
 * @version    $Id$
 * @package    SUN Framework
 * @author     JoomlaShine Team <support@joomlashine.com>
 * @copyright  Copyright (C) 2012 JoomlaShine.com. All Rights Reserved.
 * @license    GNU/GPL v2 or later http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Websites: http://www.joomlashine.com
 * Technical Support:  Feedback - http://www.joomlashine.com/contact-us/get-support.html
 */

// No direct access to this file
defined('_JEXEC') or die('Restricted access');

/**
 * Handle common Ajax requests from template admin.
 *
 * @package  SUN Framework
 * @since    1.0.0
 */
class SunFwAjaxCore extends SunFwAjax
{
	/**
	 * Save data to database
	 *
	 * @throws Exception
	 */
	public function saveStyleSettingsAction()
	{
		$styleTitle = $this->input->getString( 'style_title', '' );
		$home = $this->input->getString( 'home', '' );

		if ( empty( $styleTitle ) )
		{
			throw new Exception( 'Invalid Request' );
		}

		// If style is set as default, clear current default style.
		if ($home != '0')
		{
			$query = $this->dbo->getQuery( true );

			$query
				->update( '#__template_styles' )
				->set( 'home = 0' )
				->where( 'client_id = 0' )
				->where( 'home = ' . $this->dbo->quote( $home ) );

			// Execute query to save advanced data.
			try
			{
				$this->dbo->setQuery( $query );

				if ( ! $this->dbo->execute() )
				{
					throw new Exception( $this->dbo->getErrorMsg() );
				}
			}
			catch ( Exception $e )
			{
				throw $e;
			}
		}

		// Save style title and assignment.
		$query = $this->dbo->getQuery( true );

		$query
			->update( '#__template_styles' )
			->set( 'title = ' . $this->dbo->quote( $styleTitle ) )
			->set( 'home = ' . $this->dbo->quote( $home ) )
			->where( 'id = ' . (int) $this->styleID );

		try
		{
			$this->dbo->setQuery( $query );

			if ( ! $this->dbo->execute() )
			{
				throw new Exception( $this->dbo->getErrorMsg() );
			}
		}
		catch ( Exception $e )
		{
			throw $e;
		}

		$this->setResponse( array( 'message' => JText::_( 'SUNFW_TEMPLATE_STYLE_SAVED_SUCCESSFULLY' ) ) );
	}

	/**
	 * Save data to database
	 *
	 * @throws Exception
	 */
	public function saveAsCopyAction()
	{
		// Detect disabled extension
		$extension = JTable::getInstance('Extension');

		if ($extension->load(array('enabled' => 0, 'type' => 'template', 'element' => $this->templateName, 'client_id' => 0)))
		{
			throw new Exception(JText::_('SUNFW_ERROR_SAVE_DISABLED_TEMPLATE'));

		}

		// Load 'template_styles' table object.
 		JTable::addIncludePath( JPATH_ADMINISTRATOR  . '/components/com_templates/tables' );

 		$styleTbl = JTable::getInstance('Style', 'TemplatesTable');

 		$styleTbl->load(0);

		$currentStyle = SunFwHelper::getTemplateStyle($this->styleID);

		if (!count($currentStyle))
		{
			throw new Exception(JText::_('SUNFW_ERROR_STYLE_IS_INVALID'));
		}

		$currentStyle             = (array) $currentStyle;
		$currentStyle['id'      ] = 0;
		$currentStyle['home'    ] = 0;
		$currentStyle['title'   ] = $this->generateNewTitle(null, null, $currentStyle['title']);
		$currentStyle['assigned'] = '';

		if (!$styleTbl->bind($currentStyle))
		{
			throw new Exception($styleTbl->getError());
		}

		// Store the data.
		if (!$styleTbl->store())
		{
			throw new Exception($styleTbl->getError());
		}

		$currentSunFwStyle = SunFwHelper::getSunFwStyle($this->styleID);

		if (count($currentSunFwStyle))
		{
			$columns = array(
				'style_id',
				'template',
				'layout_builder_data',
				'appearance_data',
				'system_data',
				'mega_menu_data',
				'cookie_law_data',
				'social_share_data'
			);

			$values = array(
				intval( $styleTbl->id ),
				$this->dbo->quote( $currentSunFwStyle->layout_builder_data ),
				$this->dbo->quote( $currentSunFwStyle->appearance_data ),
				$this->dbo->quote( $currentSunFwStyle->system_data ),
				$this->dbo->quote( $currentSunFwStyle->mega_menu_data ),
				$this->dbo->quote( $currentSunFwStyle->cookie_law_data ),
				$this->dbo->quote( $this->templateName )
			);

			$query = $this->dbo->getQuery( true )
				->insert( $this->dbo->quoteName( '#__sunfw_styles' ) )
				->columns( $this->dbo->quoteName( $columns ) )
				->values( implode( ',', $values ) );

			$this->dbo->setQuery( $query );
			$this->dbo->execute();
		}

		// Compile SCSS.
		$sufwrender = new SunFwScssrender();

		$sufwrender->compile($styleTbl->id, $this->templateName);
		$sufwrender->compile($styleTbl->id, $this->templateName, 'layout');

		$this->setResponse( array( 'id' => $styleTbl->id ) );
	}

	/**
	 * Method to change the title.
	 *
	 * @param   integer  $category_id  The id of the category.
	 * @param   string   $alias        The alias.
	 * @param   string   $title        The title.
	 *
	 * @return  string  New title.
	 *
	 * @since   1.7.1
	 */
	protected function generateNewTitle($categoryId, $alias, $title)
	{
		JTable::addIncludePath( JPATH_ADMINISTRATOR  . '/components/com_templates/tables' );

		$table = JTable::getInstance('Style', 'TemplatesTable');

		while ($table->load(array('title' => $title)))
		{
			$title = \Joomla\String\StringHelper::increment($title);
		}

		return $title;
	}
}
