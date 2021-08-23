import withClass from "../../hoc/withClass";

function Layout(props) {
    return (
        <>
            {props.header}
            {props.menu}
            <main className="container">{props.content}</main>
            {props.footer}
        </>
    );
}

export default withClass(Layout, 'layout');