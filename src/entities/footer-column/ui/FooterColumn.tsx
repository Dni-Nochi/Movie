interface FooterColumnProps {
  arrays: { id: number; categorie: string }[][];
}
export function FooterColumn(props: FooterColumnProps) {
  const { arrays } = props;

  return (
    <div className="flex gap-5 text-[#999]">
      {arrays.map((categoriesArray, index) => {
        return (
          <ul key={index} className="w-48">
            {categoriesArray.map((categoriesValue, index) => {
              return (
                <li
                  key={categoriesValue.id}
                  className={index === 0 ? 'text-white pb-6' : 'pb-1.5'}
                >
                  {categoriesValue.categorie}
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}
