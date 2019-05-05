/*
过滤数据视为为空
为空显示 --
否则返回数据回显
*/
export const isEmpty = (data) => {
	if (typeof data == 'undefined' || data === '' || data === null || data === 'null' || data.length == 0) {
		return Vue.prototype.$EMPTY;
	} else {
		return data;
	}
};
