function DomainPriceList() {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-screen border text-center">
          <thead className="bg-third border-secondary ">
            <tr>
              <th className="px-4 py-2 border border-secondary ">Header 1</th>
              <th className="px-4 py-2 border border-secondary ">Header 2</th>
              <th className="px-4 py-2 border border-secondary ">Header 3</th>
              <th className="px-4 py-2 border border-secondary ">Header 4</th>
            </tr>
          </thead>
          <tbody className="bg-third border-secondary">
            <tr>
              <td className="px-4 py-2 border border-secondary">
                <img src="" alt="" />
              </td>
              <td className="px-4 py-2 border border-secondary ">Price</td>
              <td className="px-4 py-2 border border-secondary ">Price</td>
              <td className="px-4 py-2 border border-secondary ">Price</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DomainPriceList;
