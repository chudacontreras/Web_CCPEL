<?php
/**
 * @package     Joomla.Platform
 * @subpackage  Form
 *
 * @copyright   Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE
 */

defined('JPATH_PLATFORM') or die;

JFormHelper::loadFieldClass('list');

/**
 * Form Field class for the Joomla Platform.
 * Provides a list of available cache handlers
 *
 * @package     Joomla.Platform
 * @subpackage  Form
 * @see         JCache
 * @since       11.1
 */
class JFormFieldRokBoosterDataStorage extends JFormFieldList
{
	/**
	 * The form field type.
	 *
	 * @var    string
	 * @since  11.1
	 */
	protected $type = 'RokBoosterDataStorage';

	/**
	 * Method to get the field options.
	 *
	 * @return  array  The field option objects.
	 *
	 * @since   11.1
	 */
	protected function getOptions()
	{
		$options = array();

		$options[] = JHtml::_('select.option', 'default', JText::_('Default'), 'value', 'text');
		if (in_array('apc',JCache::getStores()))
		{
			$options[] = JHtml::_('select.option', 'apc', JText::_('JLIB_FORM_VALUE_CACHE_APC'), 'value', 'text');
		}
		$options = array_merge(parent::getOptions(), $options);

		return $options;
	}
}
