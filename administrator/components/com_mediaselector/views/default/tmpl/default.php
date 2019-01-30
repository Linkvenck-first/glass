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

// Display messages.
if (JFactory::getApplication()->input->getInt('ajax') != 1)
{
	echo $this->msgs;
}

// Get base URL.
$base_url = JUri::root();

// Get session token.
$token = JSession::getFormToken();

// Generate base Ajax URL.
$ajax_url = 'index.php?option=com_mediaselector&' . $token . '=1&task=ajax.';
?>
<div id="bb-media-selector"></div>
<script type="text/javascript">
	(function renderMediaSelector() {
		if (window.BBMediaSelector) {
			const config = {
				baseURL: '<?php echo $base_url; ?>',
				getAllFiles: '<?php echo JRoute::_("{$ajax_url}getListFiles", false); ?>',
				getFullDirectory: '<?php echo JRoute::_("{$ajax_url}getFullDirectory", false); ?>',
				uploadFile: '<?php echo JRoute::_("{$ajax_url}uploadFile", false); ?>',
				createFolder: '<?php echo JRoute::_("{$ajax_url}createFolder", false); ?>',
				deleteFolder: '<?php echo JRoute::_("{$ajax_url}deleteFolder", false); ?>',
				deleteFile: '<?php echo JRoute::_("{$ajax_url}deleteFile", false); ?>',
				renameFolder: '<?php echo JRoute::_("{$ajax_url}renameFolder", false); ?>',
				renameFile: '<?php echo JRoute::_("{$ajax_url}renameFile", false); ?>',
			}

			ReactDOM.render(
				React.createElement(BBMediaSelector, {config: config}),
				document.getElementById('bb-media-selector')
			);

			var fieldid = '<?php echo JFactory::getApplication()->input->getString('fieldid'); ?>';

			if (fieldid != '' && window.parent) {
				var
				selected,
				change = function(event) {
					selected = event.detail;
				};

				if (typeof document.addEventListener == 'function') {
					document.addEventListener('select-file', change);
				} else if (typeof document.attachEvent == 'function') {
					document.attachEvent('select-file', change);
				}

				var button = window.parent.document.querySelector('.modal.in .modal-footer .btn-primary');

				if ( ! button ) {
					var footer = window.parent.document.querySelector('.modal.in .modal-footer');

					button = window.parent.document.createElement('a');
					button.className = 'btn btn-primary';
					button.textContent = '<?php echo JText::_('JSN_MEDIASELECTOR_SELECT'); ?>';

					button.setAttribute('data-dismiss', 'modal');

					footer.insertBefore(button, footer.children[0]);
				}

				if ( ! button.isBBMediaSelectorSelectButton ) {
					var select = function(event) {
						event.preventDefault();

						// If there is a callback function, call it.
						if (window.parent.jInsertFieldValue) {
							return window.parent.jInsertFieldValue(selected, fieldid);
						}

						// Set new value for the affected field.
						var field = window.parent.document.getElementById(fieldid);

						if (field) {
							field.value = selected;
						}

						// Trigger a change event on the affected field.
						if (typeof field.dispatchEvent == 'function') {
							field.dispatchEvent( new window.Event('change') );
						} else if (typeof field.fireEvent == 'function') {
							field.fireEvent( 'onchange', document.createEventObject() );
						}
					};

					if (typeof button.addEventListener == 'function') {
						button.addEventListener('click', select);
					} else if (typeof button.attachEvent == 'function') {
						button.attachEvent('click', select);
					}

					button.isBBMediaSelectorSelectButton = true;
				}
			}
		} else {
			setTimeout(renderMediaSelector, 100);
		}
	})();
</script>
<?php
// Display footer if necessary.
if (JFactory::getApplication()->input->getCmd('tmpl') != 'component')
{
	JSNHtmlGenerate::footer();
}
