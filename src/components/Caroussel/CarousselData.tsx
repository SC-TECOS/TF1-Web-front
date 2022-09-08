export const CarrousselData = (dataList) =>
  dataList?.map((el) => (
    <div key={el.id}>
      <div>
        <img src={el.url} alt={el.ids} />
      </div>
    </div>
  ));
