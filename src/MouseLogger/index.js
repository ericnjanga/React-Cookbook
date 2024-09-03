import './styles.css';


const PanelMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) {
        return null;
    }

    return (
        <div className="BasicTacker">
            <p>Mouse position</p>
            <div className="row">
                <span>x: {mousePosition.x}</span>
                <span>y: {mousePosition.y}</span>
            </div>
        </div>
    );
};

const PointMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) {
        return null;
    }

    return (
            <p>
                ({mousePosition.x}, {mousePosition.y})
            </p>
    );
};

function MouseLogger() {
    return (
        <div className="PanelMouseLogger">
            <header className="header">Panel Mouse Logger</header>
            <PanelMouseLogger />
            <PointMouseLogger />
        </div>
    );
}

export default MouseLogger;