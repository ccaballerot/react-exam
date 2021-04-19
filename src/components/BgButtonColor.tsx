import { InputLabel, MenuItem, Select, FormControl } from '@material-ui/core';

export const BgButtoncolor = ( { color, handleChange }: any ) => {
    let colors = [
        {
            value: '#FFFFFF',
            label: 'white'
        },
        {
            value: 'aliceblue',
            label: 'aliceblue'
        },
        {
            value: 'bisque',
            label: 'bisque'
        },
        {
            value: 'aquamarine',
            label: 'aquamarine'
        },
        {
            value: 'cadetblue',
            label: 'cadetblue'
        },
        {
            value: 'coral',
            label: 'coral'
        }        
           
    ];
    return (        
        <div>
            <FormControl style={{ width: '60%' }}>
                <InputLabel style={{ fontSize: 14 }} id="demo-simple-select-label">Button-color</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={color}
                    onChange={handleChange}
                >
                    { colors?.map((c: any) => (
                        <MenuItem value={c.value}>{ c.label }</MenuItem>
                    )) }
                </Select>`
            </FormControl>            
        </div>

    )
}