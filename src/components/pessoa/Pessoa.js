import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

let URL = 'http://localhost:8080/api/pessoa';

export class Pessoa extends Component {

    constructor() {
        super();
        this.state = {
            pessoaLogada = null,
            listaPessoas = []
        }
    }

    componentDidMount() {
        fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + pessoaLogada.accessToken
            }
        }).then((response) => {
            if (response.code === 200) {
                
            }
        })
    }

    render() {
        var count = this.state.listaPessoas ? this.state.listaPessoas.length : 0;
        var header = <div className="p-clearfix" style={{'lineHeight':'1.87em'}}>Lista de Pessoas <Button icon="pi pi-refresh" style={{'float':'right'}}/></div>;
        var footer = "Total de " + count + '  pessoas';

        return (
            <div>
                <Card title="Pessoa">
                    <DataTable value={this.state.cars} header={header} footer={footer}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" body={this.brandTemplate} style={{ textAlign: 'center' }} />
                        <Column field="color" header="Color" body={this.colorTemplate} />
                        <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '8em' }} />
                    </DataTable>
                </Card>
            </div>
        );
    }

}