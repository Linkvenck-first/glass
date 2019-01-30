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

// No direct access to this file
defined('_JEXEC') or die('Restricted access');

/**
 * Default view.
 *
 * @package  JSN_MediaSelector
 * @since    1.0.0
 */
class JSNMediaSelectorViewDefault extends JSNBaseView
{
	/**
	 * Display method
	 *
	 * @param   string  $tpl  The name of the template file to parse; automatically searches through the template paths.
	 *
	 * @return	void
	 */
	function display($tpl = null)
	{
		// Get config parameters.
		$config = JSNConfigHelper::get();

		// Set the toolbar.
		JToolbarHelper::title( JText::_('JSN_MEDIASELECTOR_DEFAULT_TITLE') );

		// Get messages.
		$msgs = '';

		if ( ! $config->get('disable_all_messages') )
		{
			$msgs = JSNUtilsMessage::getList('DEFAULT');
			$msgs = count($msgs) ? JSNUtilsMessage::showMessages($msgs) : '';
		}

		// Assign variables for rendering.
		$this->assignRef('msgs', $msgs);

		// Add common assets.
		JSNMediaSelectorHelper::addAssets();

		// Load Font Awesome.
		JSNHtmlAsset::addStyle('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

		// Load React.
		JSNHtmlAsset::addScript('https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react.min.js');
		JSNHtmlAsset::addScript('https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-dom.min.js');

		// Load Underscore.
		JSNHtmlAsset::addScript('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js');

		// Load Media Selector.
		JSNHtmlAsset::addScript(JUri::root(true) . '/administrator/components/com_mediaselector/assets/bravebits/bb-media-selector.js');

		// Display the template.
		parent::display($tpl);
	}
}
