import ListItem from "./ListItem"
export default function RenderingData ( {arr} ) {
    return (
        <>
        {arr.slice(0, 20).map((listItem, i) => (
                  <ListItem
                    key={listItem.id}
                    data={listItem}
                    i={i + 1}
                    favoriteBtn={true}
                  />
                ))}
        </>
    )
}