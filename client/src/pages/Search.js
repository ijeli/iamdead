// import React from "react";
// import '../App.css';

// class Search = () => {

// <div className='card'>
//     <div>
//        <h1>Search by Disease</h1>
//     </div>
//     <div className='form'>
//     <form method = "get" title = "Search Form" action="https://cse.google.com/cse/publicurl">
//  <div>
//     <input type="text" id="q" name="q" title="Search this site" alt="Search Text" maxlength="256" />
//     <input type="hidden" id="cx" name="cx" value="013626029654558379071:ze3tw4csia4" />
//    <input type="image" id="searchSubmit" name="submit" src="https://www.flaticon.com/free-icon/active-search-symbol_34148" alt="Go" title="Submit Search Query" /> 
//  </div>
// </form>
//     </div>
    
      
// </div>

// }
    
// export default Search;

import React from "react";
import '../App.css';

const Search = () =>

<div className = 'container'>
    <br></br><br></br>
    <div className = 'row'>
        <div className = 'col-lg-3'></div>
        <div className = 'col-lg-6'>
            <div className='card'>
                <br></br><br></br>
                <div>
                <h1>Search by Disease</h1>
                    
                </div>
                <div className='form'>
                    <form method = "get" title = "Search Form" action="https://cse.google.com/cse/publicurl">
                        <div>
                            <input type="text" id="q" name="q" title="Search this site" alt="Search Text" maxlength="256" />
                            <input type="hidden" id="cx" name="cx" value="013626029654558379071:ze3tw4csia4" />
                            <input type="image" id="searchSubmit" name="submit" src="https://www.flaticon.com/free-icon/active-search-symbol_34148" alt="Go" title="Submit Search Query" /> 
                        </div>
                    </form>
                </div>
                <br></br><br></br>
            </div>
        </div>
    </div>
</div>
    
export default Search;