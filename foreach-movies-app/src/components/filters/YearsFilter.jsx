import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const YearsFilter = ({ onYearSelect }) => {
  const [searchParams] = useSearchParams();
  const [selectedYear, setSelectedYear] = useState(searchParams.get('year') || 2024);

  const generateYearList = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 1900;
    const years = [];
    for (let year = startYear; year <= currentYear; year++) {
      years.push(year);
    }
    return years;
  };

  const years = generateYearList();

  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
    onYearSelect(selectedYear);
  };

  return (
    <div className="select">
      <select className="format" name="year-filter" id="year-filter" onChange={handleYearChange} value={selectedYear}>
        {years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default YearsFilter;