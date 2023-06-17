import './style.scss'

const Header = () => {
    return(
        <div className="header-div"> 
            <div className="header-flex">
                <div className="app-item-logo-txt">
                    <span>{process.env.APP_NAME}</span>
                </div>
                <div className="app-profile">
                    Default User
                </div>
            </div>
        </div>
    );
};

export default Header;