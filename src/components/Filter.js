export default function Filter({ onFilter }) {
  return (
    <>
      <div className="filter-box">
        <input
          type="text"
          placeholder="🔍 Search by location"
          onChange={(e) => onFilter(e.target.value)}
        />
      </div>

      <style>{`
        .filter-box {
          margin-bottom: 1rem;
        }
        .filter-box input {
          padding: 10px;
          width: 100%;
          max-width: 300px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 6px;
        }
      `}</style>
    </>
  );
}
