import Filters from "./Filters";
import Select from "./Select";
import Shop from "./Shop";

export default function General() {
	return (
	  <div className="General">
		<div className="filter">
		  <Filters />
		</div>
		<div className="shop">
		  <div className="select-div">
			<p>Collections</p>
			<Select />
		  </div>
		  <Shop />
		</div>
	  </div>
	);
  }