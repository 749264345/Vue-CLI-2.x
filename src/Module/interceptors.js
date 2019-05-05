// 接口请求拦截器
axios.interceptors.request.use(
	(config) => {
		//每次请求发起前为当前接口创建，取消请求的实例
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();
		Vue.prototype.$requestCancel = function () {
			source.cancel('canceled');
		};

		config.cancelToken = source.token;

		// 接口添加头信息
		config.headers.Authorization = localStorage.getItem('token');
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

// 接口响应拦截器
axios.interceptors.response.use(
	(response) => {

		if (response.data.code == 200) {
			if (response.headers.authorization) {
				localStorage.setItem('token', response.headers.authorization);
			}
		} else {
			Vue.prototype.$message.error(response.data.errMsg);
		}

		return response;
	},
	(error) => {
		if (error) {
			//请求取消
			if (error.message) {
				if (error.message == 'canceled') {
					return;
				}
			}
		}
		// 返回接口返回的错误信息
		Vue.prototype.$message.error('网络异常，请稍后重试');
		return Promise.reject(error.response.data);
	}
);
