import Vue from 'vue';

import {
  YlButton,
  YlInput,
  YlSelect,
  YlOption,
  YlMenu,
  YlMenuItem,
  YlMenuItemGroup,
  YlScrollbar,
  YlDropdown,
  YlDropdownMenu,
  YlDropdownItem,
  YlInputNumber,
  YlSlider,
  YlTable,
  YlTableColumn,
  YlTooltip,
  YlRadio,
  YlRadioGroup,
  YlCheckbox,
  YlSwitch,
  YlUpload,
  YlIcon,
  YlPopover,
  YlDatePicker,
  YlCheckboxGroup,
  Loading,
  MessageBox,
  Message,
  YlRadioButton,
  YlTabs,
  YlDialog,
  YlPagination,
  YlForm,
  YlFormItem,
  YlModal,
  YlBreadcrumb,
  YlBreadcrumbItem,
  YlTabPane,
  YlSubmenu,
  YlCascader
} from 'gleaf';

Vue.use(YlButton);
Vue.use(YlInput);
Vue.use(YlSelect);
Vue.use(YlOption);
Vue.use(YlRadio);
Vue.use(YlRadioGroup);
Vue.use(YlRadioButton);
Vue.use(YlMenu);
Vue.use(YlMenuItem);
Vue.use(YlMenuItemGroup);
Vue.use(YlScrollbar);
Vue.use(YlDropdown);
Vue.use(YlDropdownMenu);
Vue.use(YlDropdownItem);
Vue.use(YlInputNumber);
Vue.use(YlSlider);
Vue.use(YlTable);
Vue.use(YlTableColumn);
Vue.use(YlTooltip);
Vue.use(YlCheckbox);
Vue.use(YlSwitch);
Vue.use(YlUpload);
Vue.use(YlIcon);
Vue.use(YlPopover);
Vue.use(YlDatePicker);
Vue.use(YlCheckboxGroup);
Vue.use(Loading);
Vue.use(YlTabs);
Vue.use(YlDialog);
Vue.use(YlPagination);
Vue.use(YlForm);
Vue.use(YlFormItem);
Vue.use(YlModal);
Vue.use(YlBreadcrumb);
Vue.use(YlBreadcrumbItem);
Vue.use(YlTabPane);
Vue.use(YlSubmenu);
Vue.use(YlCascader);

Vue.prototype.$ELEMENT = { zIndex: 3000 };
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;
const alertOption = { center: true };
Vue.prototype.$alert = options => MessageBox.alert(options.message, options.title, Object.assign(alertOption, options));
