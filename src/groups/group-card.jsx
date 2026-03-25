export default function GroupCard({isSelected, name, onCardClick, id}) {
        return (
        <div className={isSelected ? 'gourp-card-selected': undefined}
        onClick={() => onCardClick(id)}>
            <h1>Group Name: {name}</h1>
            <p>Description: some description</p>
        </div>
    )
}