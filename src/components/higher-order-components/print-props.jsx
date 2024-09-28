export default function PrintProps({Component}) {
    return (props) => {
        return <Component {...props}/>
    }

}