import React from 'react';


function DataTable() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container-fluid text-center mb-4">
                    <div className="card mx-auto w-100">
                        <div className="card-body">
                            <div className="container-fluid">
                                <div className="alert alert-secondary text-center mb-3">
                                    <h4 className="mt-2">Подразделения</h4>
                                </div>
                                <table id="dataTable"
                                       className="table table-striped table-bordered table-sm table-hover"
                                       cellSpacing="0" width="100%">
                                    <thead>
                                    <tr>
                                        <th className="th-sm font-weight-bold alert-primary " width="10%">№ п/п</th>
                                        <th className="th-sm font-weight-bold alert-primary " width="90%">Название</th>
                                    </tr>
                                    </thead>
                                    <tbody id="rowContent">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default DataTable;