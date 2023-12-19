import React from "react";

class Search extends React.Component  {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div className="todo-form-container">
                <form>
                    <input type="text" placeholder="What need to be done?" />
                </form>
            </div>
        )
    }
}
export default Search;