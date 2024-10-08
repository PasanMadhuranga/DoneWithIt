import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({items, name,  placeholder, PickerItemComponent, width, numberOfColumns}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
        <AppPicker 
            items={items}
            onSelectItem={(item) => setFieldValue(name, item)}
            selectedItem={values[name]}
            placeholder={placeholder}
            width={width}
            PickerItemComponent={PickerItemComponent}
            numberOfColumns={numberOfColumns}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>

    );
}

export default AppFormPicker;