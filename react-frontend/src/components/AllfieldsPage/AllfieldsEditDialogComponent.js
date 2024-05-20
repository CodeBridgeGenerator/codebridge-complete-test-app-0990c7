import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import moment from "moment";

import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Chips } from 'primereact/chips';
import { Checkbox } from 'primereact/checkbox';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';



const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const AllfieldsCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            fieldText1: _entity?.fieldText1,
fieldTextArea2: _entity?.fieldTextArea2,
fieldTextIcon4: _entity?.fieldTextIcon4,
fieldTextImage5: _entity?.fieldTextImage5,
fieldTextChip6: _entity?.fieldTextChip6,
fieldTextTag7: _entity?.fieldTextTag7,
fieldBooleanText1: _entity?.fieldBooleanText1,
fieldBooleanTick2: _entity?.fieldBooleanTick2,
fieldBooleanCheckBox3: _entity?.fieldBooleanCheckBox3,
fieldBooleanSwitch4: _entity?.fieldBooleanSwitch4,
fieldNumberText1: _entity?.fieldNumberText1,
fieldNumberBadge3: _entity?.fieldNumberBadge3,
fieldNumberKnob4: _entity?.fieldNumberKnob4,
fieldNumberRating5: _entity?.fieldNumberRating5,
fieldNumberSlider6: _entity?.fieldNumberSlider6,
fieldNumberProgressBar7: _entity?.fieldNumberProgressBar7,
fieldNumberCurrency8: _entity?.fieldNumberCurrency8,
fieldDateText1: _entity?.fieldDateText1,
fieldDateCalendar2: _entity?.fieldDateCalendar2,
fieldDateRange3: _entity?.fieldDateRange3,
fieldDateMulti4: _entity?.fieldDateMulti4,
fieldDateTime5: _entity?.fieldDateTime5,
fieldDateTime126: _entity?.fieldDateTime126,
fieldDateTime247: _entity?.fieldDateTime247,
        };

        setLoading(true);
        try {
            
        const result = await client.service("allfields").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info allfields updated successfully" });
        props.onEditResult(result);
        
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };
    // children dropdown options

    

    return (
        <Dialog header="Edit Allfields" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="allfields-edit-dialog-component">
                <div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldText1">Fieldtext1:</label>
            <p id="fieldText1" className="m-0"  >fieldText1:</p>
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldTextArea2">Fieldtextarea2:</label>
            <InputTextarea id="fieldTextArea2" rows={5} cols={30} value={_entity?.fieldTextArea2} onChange={ (e) => setValByKey("fieldTextArea2", e.target.value)} autoResize  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldTextIcon4">Fieldtexticon4:</label>
            <InputText id="fieldTextIcon4" className="w-full mb-3" value={_entity?.fieldTextIcon4} onChange={(e) => setValByKey("fieldTextIcon4", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldTextImage5">Fieldtextimage5:</label>
            <InputText className="w-full mb-3 p-inputtext-sm" value={_entity?.fieldTextImage5} onChange={(e) => setValByKey("fieldTextImage5", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldTextChip6">Fieldtextchip6:</label>
            <Chips id="fieldTextChip6" className="w-full mb-3" value={_entity?.fieldTextChip6} onChange={(e) => setValByKey("fieldTextChip6", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldTextTag7">Fieldtexttag7:</label>
            <InputText id="fieldTextTag7" className="w-full mb-3 p-inputtext-sm" value={_entity?.fieldTextTag7} onChange={(e) => setValByKey("fieldTextTag7", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldBooleanText1">Fieldbooleantext1:</label>
            <Checkbox id="fieldBooleanText1" className={`pi ${_entity?.fieldBooleanText1?"pi-check": "pi-times"}`} onChange={(e) => setValByKey("fieldBooleanText1", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldBooleanTick2">Fieldbooleantick2:</label>
            <Checkbox id="fieldBooleanTick2" className={`pi ${_entity?.fieldBooleanTick2?"pi-check": "pi-times"}`} onChange={(e) => setValByKey("fieldBooleanTick2", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldBooleanCheckBox3">Fieldbooleancheckbox3:</label>
            <Checkbox id="fieldBooleanCheckBox3" checked={_entity?.fieldBooleanCheckBox3} onChange={ (e) => setValByKey("fieldBooleanCheckBox3", e.checked)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldBooleanSwitch4">Fieldbooleanswitch4:</label>
            <InputText id="fieldBooleanSwitch4" className="w-full mb-3 p-inputtext-sm" value={_entity?.fieldBooleanSwitch4} onChange={(e) => setValByKey("fieldBooleanSwitch4", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldNumberText1">Fieldnumbertext1:</label>
            <InputText id="fieldNumberText1" className="w-full mb-3 p-inputtext-sm" value={_entity?.fieldNumberText1} onChange={(e) => setValByKey("fieldNumberText1", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldNumberBadge3">Fieldnumberbadge3:</label>
            <InputNumber id="fieldNumberBadge3" className="w-full mb-3" value={_entity?.fieldNumberBadge3} onChange={(e) => setValByKey("fieldNumberBadge3", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldNumberKnob4">Fieldnumberknob4:</label>
            <InputNumber id="fieldNumberKnob4" value={_entity?.fieldNumberKnob4} min={0} max={100} onChange={ (e) => setValByKey("fieldNumberKnob4", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldNumberRating5">Fieldnumberrating5:</label>
            <InputNumber id="fieldNumberRating5" min={1} max={5} style={{width:"20rem"}} value={_entity?.fieldNumberRating5} onChange={ (e) => setValByKey("fieldNumberRating5", e.target.value)} cancel={false}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldNumberSlider6">Fieldnumberslider6:</label>
            <InputNumber id="fieldNumberSlider6" value={_entity?.fieldNumberSlider6} min={0} max={100} onChange={ (e) => setValByKey("fieldNumberSlider6", e.value)} style={{width:"20rem"}}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldNumberProgressBar7">Fieldnumberprogressbar7:</label>
            <InputNumber id="fieldNumberProgressBar7" className="w-full mb-3" value={_entity?.fieldNumberProgressBar7} onValueChange={(e) => setValByKey("fieldNumberProgressBar7", e.value)} prefix="%" mode="decimal" minFractionDigits={2}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldNumberCurrency8">Fieldnumbercurrency8:</label>
            <InputNumber id="fieldNumberCurrency8" className="w-full mb-3" mode="currency" currency="MYR" locale="en-US" value={_entity?.fieldNumberCurrency8} onValueChange={(e) => setValByKey("fieldNumberCurrency8", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldDateText1">Fielddatetext1:</label>
            <InputText id="fieldDateText1" className="w-full mb-3 p-inputtext-sm" value={_entity?.fieldDateText1} onChange={(e) => setValByKey("fieldDateText1", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldDateCalendar2">Fielddatecalendar2:</label>
            <Calendar id="fieldDateCalendar2" value={new Date(_entity?.fieldDateCalendar2)} onChange={ (e) => setValByKey("fieldDateCalendar2", new Date(e.target.value))} showIcon showButtonBar  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldDateRange3">Fielddaterange3:</label>
            <Calendar id="fieldDateRange3" value={_entity?.fieldDateRange3?.map((d)=> new Date(d))} onChange={ (e) => setValByKey("fieldDateRange3", e.value)} showIcon selectionMode="range"  readOnlyInput hideOnRangeSelection  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldDateMulti4">Fielddatemulti4:</label>
            <Calendar id="fieldDateMulti4" value={_entity?.fieldDateMulti4?.map((d)=> new Date(d))} onChange={ (e) => setValByKey("fieldDateMulti4", e.value)} showIcon selectionMode="multiple" readOnlyInput  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldDateTime5">Fielddatetime5:</label>
            <Calendar id="fieldDateTime5" value={new Date(_entity?.fieldDateTime5)} onChange={ (e) => setValByKey("fieldDateTime5", e.value)} showIcon timeOnly  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldDateTime126">Fielddatetime126:</label>
            <Calendar id="fieldDateTime126" value={new Date(_entity?.fieldDateTime126)} onChange={ (e) => setValByKey("fieldDateTime126", e.value)} showTime hourFormat="12"  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="fieldDateTime247">Fielddatetime247:</label>
            <Calendar id="fieldDateTime247" value={new Date(_entity?.fieldDateTime247)} onChange={ (e) => setValByKey("fieldDateTime247", e.value)} showTime hourFormat="24"  />
        </span>
        </div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0">createdAt:{" " + moment(_entity?.createdAt).fromNow()}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0">lastUpdatedAt:{" " + moment(_entity?.updatedAt).fromNow()}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0">createdBy:{" " +_entity?.createdBy?.name}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0">lastUpdatedBy:{" " +_entity?.updatedBy?.name}</p></div>
                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(AllfieldsCreateDialogComponent);
