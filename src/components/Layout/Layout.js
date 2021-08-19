export default function Layout(props) {
    return (
        <>
            {props.header}
            {props.menu}
            <main className="container">{props.content}</main>
            {props.footer}
        </>
    );
}