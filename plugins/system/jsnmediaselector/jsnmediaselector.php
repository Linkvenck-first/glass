<?php
/**
 * @version    $Id$
 * @package    JSN_MediaSelector
 * @author     JoomlaShine Team <support@joomlashine.com>
 * @copyright  Copyright (C) 2012 JoomlaShine.com. All Rights Reserved.
 * @license    GNU/GPL v2 or later http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Websites: http://www.joomlashine.com
 * Technical Support:  Feedback - http://www.joomlashine.com/contact-us/get-support.html
 */

// No direct access to this file.
defined('_JEXEC') or die('Restricted access');

class plgSystemJSNMediaSelector extends JPlugin
{
	/**
	 * Joomla application object.
	 *
	 * @var  JApplicationCms
	 */
	protected $app;

	/**
	 * Requested component.
	 *
	 * @var  string
	 */
	protected $option;

	/**
	 * Requested view.
	 *
	 * @var  string
	 */
	protected $view;

	/**
	 * Requested response template.
	 *
	 * @var  string
	 */
	protected $tmpl;

	/**
	 * ID of input field to set value for.
	 *
	 * @var  string
	 */
	protected $fieldid;

	/**
	 * Constructor.
	 *
	 * @param   object  &$subject  The object to observe
	 * @param   array   $config    An optional associative array of configuration settings.
	 *                             Recognized key values include 'name', 'group', 'params', 'language'
	 *                             (this list is not meant to be comprehensive).
	 *
	 * @return  void
	 */
	public function __construct( $subject, $option = array() )
	{
		parent::__construct($subject, $option);

		// Get Joomla application object.
		$this->app = JFactory::getApplication();

		// Get request variables.
		$this->option = $this->app->input->getCmd('option');
		$this->view   = $this->app->input->getCmd('view');
		$this->tmpl   = $this->app->input->getCmd('tmpl');

		// Get ID of field to set value for.
		$this->fieldid = $this->app->input->getString('fieldid');

		// Load language file.
		JFactory::getLanguage()->load('plg_system_jsnpoweradmin', JPATH_ADMINISTRATOR);
	}

	/**
	 * Initialize JSN MediaSelector.
	 *
	 * @return  void
	 */
	public function onAfterInitialise()
	{
		// Check if Joomla's built-in media manager is requested?
		if ($this->option == 'com_media')
		{
			// Build redirect link.
			$link = 'index.php?option=com_mediaselector';

			if (strpos($this->view, 'images') === 0)
			{
				$link .= '&filter=images';
			}

			if ( ! empty($this->tmpl) )
			{
				$link .= "&tmpl={$this->tmpl}";
			}

			if ( ! empty($this->fieldid) )
			{
				$link .= "&fieldid={$this->fieldid}";
			}

			JFactory::getApplication()->redirect($link);
		}
	}
}
