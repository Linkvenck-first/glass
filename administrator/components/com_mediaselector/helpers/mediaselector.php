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
 * MediaSelector component helper.
 *
 * @package  JSN_MediaSelector
 * @since    1.0.0
 */
class JSNMediaSelectorHelper
{
	/**
	 * Configure the linkbar
	 *
	 * @param   string  $vName  The name of the active view
	 *
	 * @return	void
	 */
	public static function addSubmenu($vName)
	{
		if (JFactory::getApplication()->input->getCmd('tmpl', null) == null)
		{
			JSNMenuHelper::addEntry(
				'configuration',
				'JSN_MENU_CONFIGURATION_AND_MAINTENANCE',
				'',
				false,
				'administrator/components/com_mediaselector/assets/images/icons-16/icon-configuration.png',
				'sub-menu'
			);

			JSNMenuHelper::addEntry(
				'about',
				'JSN_MENU_ABOUT',
				'index.php?option=com_mediaselector&view=about',
				$vName == 'about',
				'administrator/components/com_mediaselector/assets/images/icons-16/icon-about.png',
				'sub-menu'
			);

			// Declare 2nd-level menu items	for 'configuration' entry
			JSNMenuHelper::addEntry(
				'global-params', 'Global Parameters', 'index.php?option=com_mediaselector&view=configuration&s=configuration&g=configs', false, '', 'sub-menu.configuration'
			);

			JSNMenuHelper::addEntry(
				'messages', 'Messages', 'index.php?option=com_mediaselector&view=configuration&s=configuration&g=msgs', false, '', 'sub-menu.configuration'
			);

			JSNMenuHelper::addEntry(
				'languages', 'Languages', 'index.php?option=com_mediaselector&view=configuration&s=configuration&g=langs', false, '', 'sub-menu.configuration'
			);

			JSNMenuHelper::addEntry(
				'permissions', 'Permissions', 'index.php?option=com_mediaselector&view=configuration&s=maintenance&g=permissions', false, '', 'sub-menu.configuration'
			);

			JSNMenuHelper::addEntry(
				'update', 'Product Update', 'index.php?option=com_mediaselector&view=configuration&s=configuration&g=update', false, '', 'sub-menu.configuration'
			);

			// Render the sub-menu
			JSNMenuHelper::render('sub-menu');
		}
	}

	/**
	 * Add assets
	 *
	 * @return	void
	 */
	public static function addAssets()
	{
		// Load common assets
		! class_exists('JSNBaseHelper') OR JSNBaseHelper::loadAssets();
	}
}
