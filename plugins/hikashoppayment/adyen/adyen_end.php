<?php
/**
 * @package	HikaShop for Joomla!
 * @version	3.2.2
 * @author	hikashop.com
 * @copyright	(C) 2010-2017 HIKARI SOFTWARE. All rights reserved.
 * @license	GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html
 */
defined('_JEXEC') or die('Restricted access');
?><div class="hikashop_adyen_end" id="hikashop_adyen_end">
	<span id="hikashop_adyen_end_message" class="hikashop_adyen_end_message">
		<?php echo JText::sprintf('PLEASE_WAIT_BEFORE_REDIRECTION_TO_X', $this->payment_name).'<br/>'. JText::_('CLICK_ON_BUTTON_IF_NOT_REDIRECTED');?>
	</span>
	<span id="hikashop_adyen_end_spinner" class="hikashop_adyen_end_spinner hikashop_checkout_end_spinner">
	</span>
	<br/>
	<form id="hikashop_adyen_form" name="hikashop_adyen_form" action="<?php echo $this->payment_params->url;?>" method="post">
		<div id="hikashop_adyen_end_image" class="hikashop_adyen_end_image">
			<input id="hikashop_adyen_button" type="submit" class="btn btn-primary" value="<?php echo JText::_('PAY_NOW');?>" name="" alt="<?php echo JText::_('PAY_NOW');?>" />
		</div>
<?php
	foreach($this->vars as $name => $value ) {
		echo '<input type="hidden" name="'.$name.'" value="'.htmlspecialchars((string)$value).'" />';
	}
	hikaInput::get()->set('noform',1);
?>
	</form>
	<script type="text/javascript">
	<!--
	document.getElementById('hikashop_adyen_form').submit();
	//-->
	</script>
</div>
