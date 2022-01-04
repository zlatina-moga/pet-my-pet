import PetList from '../PetList/PetList'

export default function Dashboard() {
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <section>
                <PetList />
            </section>   
        </section>
    )
}