import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import UserLayout from "../Layouts/UserLayout";

import { Chip } from 'primereact/chip';
import { Tag } from 'primereact/tag';
import { Badge } from 'primereact/badge';
import { Knob } from 'primereact/knob';
import { Rating } from 'primereact/rating';
import { Slider } from 'primereact/slider';
import { ProgressBar } from 'primereact/progressbar';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';

const SingleAllfieldsPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("allfields")
            .get(urlParams.singleAllfieldsId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Allfields", type: "error", message: error.message || "Failed get allfields" });
            });
    }, [props,urlParams.singleAllfieldsId]);


    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <UserLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Allfields</h3>
                </div>
                <p>allfields/{urlParams.singleAllfieldsId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fieldtext1</label><p className="m-0 ml-3" >{_entity?.fieldText1}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fieldtextarea2</label><p className="m-0 ml-3" >{_entity?.fieldTextArea2}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fieldtexticon4</label><p className="m-0 ml-3" ><i  id="fieldTextIcon4" className={`pi ${_entity?.fieldTextIcon4}`}  ></i></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fieldtextimage5</label><p><img id="fieldTextImage5" src={_entity?.fieldTextImage5} className="m-0 ml-3" width={300}  /></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fieldtextchip6</label><p className="m-0 ml-3" ><Chip id="fieldTextChip6" label={_entity?.fieldTextChip6} /></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fieldtexttag7</label><p className="m-0 ml-3" ><Tag id="fieldTextTag7" vaue={_entity?.fieldTextTag7} /></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fieldbooleantext1</label><p className="m-0 ml-3" ><i id="fieldBooleanText1" className={`pi ${_entity?.fieldBooleanText1?"pi-check": "pi-times"}`}  ></i></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fieldbooleantick2</label><p className="m-0 ml-3" ><i id="fieldBooleanTick2" className={`pi ${_entity?.fieldBooleanTick2?"pi-check": "pi-times"}`}  ></i></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fieldbooleancheckbox3</label><p className="m-0 ml-3" ><i id="fieldBooleanCheckBox3" className={`pi ${_entity?.fieldBooleanCheckBox3?"pi-check": "pi-times"}`}  ></i></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fieldbooleanswitch4</label><p id="fieldBooleanSwitch4" className="m-0" >{_entity?.fieldBooleanSwitch4}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fieldnumbertext1</label><p id="fieldNumberText1" className="m-0" >{_entity?.fieldNumberText1}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fieldnumberbadge3</label><p className="m-0 ml-3" ><Badge id="fieldNumberBadge3" value={Number(_entity?.fieldNumberBadge3)}/></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fieldnumberknob4</label><p className="m-0 ml-3" ><Knob id="fieldNumberKnob4" value={Number(_entity?.fieldNumberKnob4)} /></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fieldnumberrating5</label><p className="m-0 ml-3" ><Rating id="fieldNumberRating5" value={Number(_entity?.fieldNumberRating5)} /></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fieldnumberslider6</label><Slider id="fieldNumberSlider6" value={_entity?.fieldNumberSlider6} style={{width:"20rem"}}  /></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fieldnumberprogressbar7</label><p className="m-0 ml-3" ><ProgressBar id="fieldNumberProgressBar7" value={Number(_entity?.fieldNumberProgressBar7)}/></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fieldnumbercurrency8</label><p className="m-0 ml-3" ><InputNumber id="fieldNumberCurrency8" value={Number(_entity?.fieldNumberCurrency8)} mode="currency" currency="MYR" locale="en-US"   disabled={true} /></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fielddatetext1</label><p id="fieldDateText1" className="m-0" >{_entity?.fieldDateText1}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fielddatecalendar2</label><p id="fieldDateCalendar2" className="m-0 ml-3" >{_entity?.fieldDateCalendar2}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fielddaterange3</label><p id="fieldDateRange3" className="m-0 ml-3" ><Calendar id="fieldDateRange3" value={_entity?.fieldDateRange3?.map((d)=> new Date(d))} selectionMode="range"  /></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fielddatemulti4</label><p className="m-0 ml-3" ><Calendar id="fieldDateMulti4" value={_entity?.fieldDateMulti4?.map((d)=> new Date(d))} selectionMode="multiple"  /></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fielddatetime5</label><p className="m-0 ml-3" ><Calendar id="fieldDateTime5" value={new Date(_entity?.fieldDateTime5)} timeOnly  disabled={true} /></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fielddatetime126</label><p className="m-0 ml-3" ><Calendar id="fieldDateTime126" value={new Date(_entity?.fieldDateTime126)} disabled={true} hourFormat="24"  /></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fielddatetime247</label><p className="m-0 ml-3" ><Calendar id="fieldDateTime247" value={new Date(_entity?.fieldDateTime247)} disabled={true} hourFormat="12"   /></p></div>
            

            <div className="col-12">&nbsp;</div>
            <div className="col-12 md:col-6 lg:col-3">
                <label className="text-sm text-primary">created</label>
                <p className="m-0 ml-3">{moment(_entity?.createdAt).fromNow()}</p>
            </div>
            
            <div className="col-12 md:col-6 lg:col-3">
                <label className="text-sm text-primary">updated</label>
                <p className="m-0 ml-3">{moment(_entity?.updatedAt).fromNow()}</p>
            </div>
            
            <div className="col-12 md:col-6 lg:col-3">
                <label className="text-sm text-primary">createdBy</label>
                <p className="m-0 ml-3">{_entity?.createdBy?.name}</p>
            </div>
            
            <div className="col-12 md:col-6 lg:col-3">
                <label className="text-sm text-primary">lastUpdatedBy</label>
                <p className="m-0 ml-3">{_entity?.updatedBy?.name}</p>
            </div>

                </div>
            </div>
        </div>
        
        </UserLayout>
    );
};

const mapState = (state) => {
    return {};
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleAllfieldsPage);
