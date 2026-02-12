import React from 'react';
import { Button, Modal } from 'antd';

class AppWorks extends React.Component{
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
    this.setState({
        visible: false,
    });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

render() {
    return(
        <div id='howitworks' className='block worksBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>How it works</h2>
                    <p>check our latest video to know how it works</p>
                </div>
                <div className='contentHolder'>
                <Button onClick={this.showModal}> 
                    <i className="fas fa-play"></i>
                    
                </Button>
                </div>
                <Modal 
                title="Woocommerce tutorial"
                visible={this.state.visible}
               
                onCancel={this.handleCancel}
                footer={null}
                >
                  <iframe title="Woocommerce Tutorial" width="100%" height="350" src="https://www.youtube.com"></iframe>  
                </Modal>
            </div>
        </div>
    );
}
}
export default AppWorks;