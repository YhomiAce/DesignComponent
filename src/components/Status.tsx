type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

const Status = (props: StatusProps) => {
    let message
    if (props.status === 'loading') {
        message = 'Loading....';
    }
    if (props.status === 'success') {
        message = 'Data Fetched successfully!';
    }
    if (props.status === 'error') {
        message = 'Error fetching data';
    }

  return (
    <div>
        <h2>{message}</h2>
    </div>
  )
}

export default Status