import{scps} from './scp.js';
function Datadetails(props)
{
    // get the product id from props
    const {Item} =props;

    // find the product that match product id
    const scp = scps.find(p => p.Item === Item);
return(
    <div>
        <h2>{scp.Item}</h2>
        <h3>Object Class :{scp.ObjectClass}</h3>
        <p>{scp.description}</p>
        <p><img src={scp.images} ait={scp.Item}/></p>
        
    </div>
)
}
export default Datadetails;