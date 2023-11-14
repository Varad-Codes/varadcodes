import Prompt from "../const/Prompt";

const Vision = () => {
    return (
        <div>
            <div className="content m-5 md:p-5 md:m-0 md:pl-5">
                <Prompt cmd="vision" />
                <h1>
                    I believe that users should have total control over their
                    data and how it is used. I belive that every app should
                    give their users full control over their data rather than 
                    the partial data control.
                </h1>
            </div>
        </div>
    );
};

export default Vision;
