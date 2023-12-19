import React from "react";
import './SettingForm.scss'

class SettingsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            end: 10,
            errorMessage: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInputChange(event) {
        const name = event.target.name;
        const value = Number(event.target.value);
        
        if (!isNaN(value)) {
            this.setState({
                [name]: value
            });
        }
    }

    handleSubmit() {
        const { start, end } = this.state;

        // Kiểm tra điều kiện trước khi cập nhật state và gọi receivedData
        if (start < end) {
            this.setState({
                errorMessage: ''
            });
            this.props.receivedData(start, end);
        } else {
            this.setState({
                errorMessage: 'Lỗi nhập số'
            });
        }
    }


    render() {
        return (
            <form>
                <fieldset>
                    <legend>Thiết lập</legend>
                    <div className="container">
                        <label>
                            Số bắt đầu
                            <input
                                name="start"
                                type="number"
                                value={this.state.start}
                                size="15"
                                onChange={this.handleInputChange}
                            />
                        </label>

                        <label>
                            <input
                                name="end"
                                type="number"
                                value={this.state.end}
                                onChange={this.handleInputChange}
                            />
                            Số kết thúc
                        </label>

                    </div>
                    <p className="error-message">{this.state.errorMessage}</p>
                    <input type="button" value="Áp dụng" onClick={this.handleSubmit} />
                </fieldset>
            </form>
        )
    }
}
export default SettingsForm 