import {Modal} from 'antd';
import type {ModalFuncProps} from 'antd/es/modal/interface';

export const SModal = (props: ModalFuncProps) => {
	return <Modal {...props} />;
};
