<?php
/**
 * @package	HikaShop for Joomla!
 * @version	4.0.0
 * @author	hikashop.com
 * @copyright	(C) 2010-2018 HIKARI SOFTWARE. All rights reserved.
 * @license	GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html
 */
defined('_JEXEC') or die('Restricted access');
?><div class="iframedoc" id="iframedoc"></div>
<form action="<?php echo hikashop_completeLink('email'); ?>" method="post" name="adminForm" id="adminForm" enctype="multipart/form-data">
<?php if(hikaInput::get()->getString('tmpl') == 'component') { ?>
	<div style="min-height: 50px;">
		<h1 style="float:left;">
			<?php echo Jtext::_('REPORT_EDIT'); ?>
		</h1>
		<div class="toolbar" id="toolbar" style="float: right;">
			<button class="btn btn-success" type="button" onclick="javascript:submitbutton('apply'); return false;"><i class="fa fa-save"></i> <?php echo JText::_('HIKA_SAVE',true); ?></button>
		</div>
	</div>
<?php } ?>
<?php
	echo $this->loadTemplate('param');
?>
	<div class="hikashop_backend_tile_edition">
		<div class="hkc-xl-12 hkc-lg-12 hikashop_tile_block hikashop_mail_edit_html"><div>
			<div class="hikashop_tile_title">
<?php
				echo JText::_('HTML_VERSION');
				$append = '';
				if(@$this->mail_name == 'order_status_notification') {
					$popupHelper = hikashop_get('helper.popup');
					$append = ' ' . $popupHelper->display(
						'<span style="text-transform: none;" class="btn btn-primary"><i class="fa fa-magic" aria-hidden="true"></i> '.JText::_('PER_STATUS_OVERRIDE') . '</span>',
						'PER_STATUS_OVERRIDE',
						'\''.'index.php?option=com_hikashop&amp;tmpl=component&amp;ctrl=email&amp;task=orderstatus&amp;type=html&amp;email_name='.$this->mail_name.'\'',
						'hikashop_edit_html_status',
						760,480, 'title="'.JText::_('PER_STATUS_OVERRIDE').'"', '', 'link',true
					);
				}
				echo $append;
?>
			</div>
<?php
				echo $this->editor->displayCode(
					'data[mail][body]',
					@$this->mail->body,
					array('autoFocus' => false)
				);
?>
			</div>
		</div>
		<div class="hkc-xl-12 hkc-lg-12 hikashop_tile_block hikashop_mail_edit_text"><div>
			<div class="hikashop_tile_title">
<?php
				echo JText::_('TEXT_VERSION');
				$append = '';
				if(@$this->mail_name == 'order_status_notification') {
					$popupHelper = hikashop_get('helper.popup');
					$append = ' ' . $popupHelper->display(
						'<span style="text-transform: none;" class="btn btn-primary"><i class="fa fa-magic" aria-hidden="true"></i> '.JText::_('PER_STATUS_OVERRIDE') . '</span>',
						'PER_STATUS_OVERRIDE',
						'\''.'index.php?option=com_hikashop&amp;tmpl=component&amp;ctrl=email&amp;task=orderstatus&amp;type=text&amp;email_name='.$this->mail_name.'\'',
						'hikashop_edit_text_status',
						760,480, 'title="'.JText::_('PER_STATUS_OVERRIDE').'"', '', 'link',true
					);
				}
				echo $append;
?>
			</div>
				<textarea style="width:100%" rows="20" name="data[mail][altbody]" id="altbody" ><?php echo @$this->mail->altbody; ?></textarea>
			</div>
		</div>
		<div class="hkc-xl-12 hkc-lg-12 hikashop_tile_block hikashop_mail_edit_preload" id="preloadfieldset"><div>
			<div class="hikashop_tile_title">
<?php
				echo JText::_('PRELOAD_VERSION');
				$append = '';
				if(@$this->mail_name == 'order_status_notification') {
					$popupHelper = hikashop_get('helper.popup');
					$append = ' ' . $popupHelper->display(
						'<span style="text-transform: none;" class="btn btn-primary"><i class="fa fa-magic" aria-hidden="true"></i> '.JText::_('PER_STATUS_OVERRIDE') . '</span>',
						'PER_STATUS_OVERRIDE',
						'\''.'index.php?option=com_hikashop&amp;tmpl=component&amp;ctrl=email&amp;task=orderstatus&amp;type=preload&amp;email_name='.$this->mail_name.'\'',
						'hikashop_edit_preload_status',
						760,480, 'title="'.JText::_('PER_STATUS_OVERRIDE').'"', '', 'link',true
					);
				}
				echo $append;
?>
			</div>
<?php
				echo $this->editor->displayCode(
					'data[mail][preload]',
					@$this->mail->preload,
					array('autoFocus' => false)
				);
?>
			</div>
		</div>
	</div>
	<div class="clr"></div>

	<input type="hidden" name="mail_name" value="<?php echo @$this->mail_name; ?>" />
	<input type="hidden" name="option" value="<?php echo HIKASHOP_COMPONENT; ?>" />
	<input type="hidden" name="task" value="" />
	<input type="hidden" name="ctrl" value="email" />
	<?php echo JHTML::_('form.token'); ?>
</form>
