let reuben = 'Reuben'
        let sally = 'Sally'
        let holly = 'Holly'
        let amol = 'Amol'
        let robin = 'Robin'
        let aaron = 'Aaron'
            const element = (
                <ul style = {{'color': 'blue', 'fontSize': '24px'}}>
                    <li>{reuben}</li>
                    <li>{sally}</li>
                    <li>{holly}</li>
                    <li>{amol}</li>
                    <li>{robin}</li>
                    <li>{aaron}</li>
                </ul>
            
            )
            ReactDOM.render(element, document.getElementById('content'))