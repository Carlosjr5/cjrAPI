const ClientData = ({clients}) => {
    return (
        <>
            {
                clients.map((curClient) => {
                    const {date, name, sector_id} = curClient;

                    return (
                        <tr>
                            <td>{date}</td>
                            <td>{name}</td>
                            <td>{sector_id}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default ClientData;