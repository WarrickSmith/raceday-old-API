import './LoadData.css';
const LoadData = ({ reFreshData, loadData }) => {
  return (
    <div className='loaddata'>
      <div>
        <button className='data-button' onClick={reFreshData}>
          Re-Fresh RaceDay Data
        </button>
      </div>
      <div>
        <button className='data-button' onClick={loadData}>
          Re-Load RaceDay Data
        </button>
      </div>
    </div>
  );
};

export default LoadData;
