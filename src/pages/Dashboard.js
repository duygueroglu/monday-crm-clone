import TicketCard from '../components/TicketCard'

const Dashboard = () => {

    const tickets  = [
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'Trial study',
            owner: 'Duygu Eroğlu',
            avatar: 'https://media-exp1.licdn.com/dms/image/C4D35AQHxtRuO1jIXag/profile-framedphoto-shrink_400_400/0/1607547304046?e=1652475600&v=beta&t=JnlD5MMVWcawD_tdEJTrDS76qzCLOwQQt04ywQwn874',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'A trial study for learning react.',
            timestamp: '2022-05-11T11:18:17+0000'
        },
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'Project',
            owner: 'Duygu Eroğlu',
            avatar: 'https://media-exp1.licdn.com/dms/image/C4D35AQHxtRuO1jIXag/profile-framedphoto-shrink_400_400/0/1607547304046?e=1652475600&v=beta&t=JnlD5MMVWcawD_tdEJTrDS76qzCLOwQQt04ywQwn874',
            status: 'working on it',
            priority: 2,
            progress: 60,
            description: 'A react project.',
            timestamp: '2022-05-12T11:18:17+0000'
        },
        {
            category: 'Q2 2022',
            color: 'blue',
            title: 'Build a notebook',
            owner: 'Duygu Eroğlu',
            avatar: 'https://media-exp1.licdn.com/dms/image/C4D35AQHxtRuO1jIXag/profile-framedphoto-shrink_400_400/0/1607547304046?e=1652475600&v=beta&t=JnlD5MMVWcawD_tdEJTrDS76qzCLOwQQt04ywQwn874',
            status: 'working on it',
            priority: 3,
            progress: 10,
            description: 'A notebook for thesis.',
            timestamp: '2022-05-12T11:18:17+0000'
        }
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({category})=>category))
    ]

    console.log(uniqueCategories)

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory,categoryIndex)=>(
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket =>ticket.category===uniqueCategory)
                            .map((filteredTicket, _index) => (
                                <TicketCard
                                    id={{_index}}
                                    color={filteredTicket.color}
                                    ticket={filteredTicket}
                                />
                            ))
                        }
                    </div>
                ))}
            </div>    
        </div>
    )
}

export default Dashboard