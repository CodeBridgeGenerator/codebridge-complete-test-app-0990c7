
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState, useRef } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';

import { Image } from 'primereact/image';
import { Chip } from 'primereact/chip';
import { Tag } from 'primereact/tag';
import { Checkbox } from 'primereact/checkbox';
import { Badge } from 'primereact/badge';
import { Knob } from 'primereact/knob';
import { Rating } from 'primereact/rating';
import { Slider } from 'primereact/slider';
import { ProgressBar } from 'primereact/progressbar';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { useParams } from "react-router-dom";
import moment from "moment";
import UploadService from "../../services/uploadService";

const AllfieldsDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    const dt = useRef(null);
    const urlParams = useParams();
    const [showUpload, setShowUpload] =useState(false)

const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.fieldText1}</p>
const inputTextareaTemplate1 = (rowData, { rowIndex }) => <p >{rowData.fieldTextArea2}</p>
const iconTemplate2 = (rowData, { rowIndex }) => <i className={"pi " + rowData.fieldTextIcon4}  ></i>
const imageTemplate3 = (rowData, { rowIndex }) => <Image src={rowData.fieldTextImage5}  alt="Image" height="60px" />
const chipTemplate4 = (rowData, { rowIndex }) => <Chip label={rowData.fieldTextChip6}  />
const tagTemplate5 = (rowData, { rowIndex }) => <Tag value={rowData.fieldTextTag7}  ></Tag>
const p_booleanTemplate6 = (rowData, { rowIndex }) => <p >{String(rowData.fieldBooleanText1)}</p>
const tickTemplate7 = (rowData, { rowIndex }) => <i className={`pi ${rowData.fieldBooleanTick2?"pi-check": "pi-times"}`}  ></i>
const checkboxTemplate8 = (rowData, { rowIndex }) => <Checkbox checked={rowData.fieldBooleanCheckBox3}  />
const defaultTemplate9 = (rowData, { rowIndex }) => <p >{rowData.fieldBooleanSwitch4}</p>
const defaultTemplate10 = (rowData, { rowIndex }) => <p >{rowData.fieldNumberText1}</p>
const badgeTemplate11 = (rowData, { rowIndex }) => <Badge value={Number(rowData.fieldNumberBadge3)}  />
const knobTemplate12 = (rowData, { rowIndex }) => <Knob value={Number(rowData.fieldNumberKnob4)}  />
const ratingTemplate13 = (rowData, { rowIndex }) => <Rating stars={5} style={{width:"20rem"}} value={rowData.fieldNumberRating5} cancel={false}  />
const sliderTemplate14 = (rowData, { rowIndex }) => <Slider value={Number(rowData.fieldNumberSlider6)} style={{width:"20rem"}}  />
const progressBarTemplate15 = (rowData, { rowIndex }) => <ProgressBar value={rowData.fieldNumberProgressBar7} style={{width:"20rem"}}  />
const currencyTemplate16 = (rowData, { rowIndex }) => <InputNumber value={rowData.fieldNumberCurrency8}  mode="currency" currency="MYR" locale="en-US" disabled={true} />
const defaultTemplate17 = (rowData, { rowIndex }) => <p >{rowData.fieldDateText1}</p>
const p_calendarTemplate18 = (rowData, { rowIndex }) => <p >{rowData.fieldDateCalendar2}</p>
const calendar_rangeTemplate19 = (rowData, { rowIndex }) => <p>{rowData.fieldDateRange3?.map((d)=> new Date(d)).join("-")}</p>
const calendar_multipleTemplate20 = (rowData, { rowIndex }) => <p>{rowData.fieldDateMulti4?.map((d)=> new Date(d)).join(",")}</p>
const calendar_timeonlyTemplate21 = (rowData, { rowIndex }) => <p>{new Date(rowData.fieldDateTime5).toLocaleDateString()}</p>
const calendar_12Template22 = (rowData, { rowIndex }) => <p>{new Date(rowData.fieldDateTime126).toLocaleDateString()}</p>
const calendar_24Template23 = (rowData, { rowIndex }) => <p>{new Date(rowData.fieldDateTime247).toLocaleDateString()}</p>
    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.createdAt).fromNow()}</p>);
    const pUpdatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.updatedAt).fromNow()}</p>);
    const pCreatedBy = (rowData, { rowIndex }) => (
        <p>{rowData.createdBy?.name}</p>
    );
    const pUpdatedBy = (rowData, { rowIndex }) => (<p>{rowData.updatedBy?.name}</p>);
    const paginatorLeft = (<Button type="button" icon="pi pi-upload" text onClick={() => setShowUpload(true)} disabled={false}/>);
    const paginatorRight = <Button type="button" icon="pi pi-download" text onClick={() => exportCSV()} disabled={true}/>;
    const exportCSV = () => {dt.current?.exportCSV();};

    return (
        <>
        <DataTable value={items} ref={dt} onRowClick={onRowClick} scrollable rowHover stripedRows paginator rows={10} rowsPerPageOptions={[10, 50, 250, 500]} size={"small"}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rowClassName="cursor-pointer" alwaysShowPaginator={!urlParams.singleUsersId}>
<Column field="fieldText1" header="Fieldtext1" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldTextArea2" header="Fieldtextarea2" body={inputTextareaTemplate1} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldTextIcon4" header="Fieldtexticon4" body={iconTemplate2} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldTextImage5" header="Fieldtextimage5" body={imageTemplate3} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldTextChip6" header="Fieldtextchip6" body={chipTemplate4} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldTextTag7" header="Fieldtexttag7" body={tagTemplate5} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldBooleanText1" header="Fieldbooleantext1" body={p_booleanTemplate6} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldBooleanTick2" header="Fieldbooleantick2" body={tickTemplate7} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldBooleanCheckBox3" header="Fieldbooleancheckbox3" body={checkboxTemplate8} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldBooleanSwitch4" header="Fieldbooleanswitch4" body={defaultTemplate9} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldNumberText1" header="Fieldnumbertext1" body={defaultTemplate10} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldNumberBadge3" header="Fieldnumberbadge3" body={badgeTemplate11} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldNumberKnob4" header="Fieldnumberknob4" body={knobTemplate12} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldNumberRating5" header="Fieldnumberrating5" body={ratingTemplate13} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldNumberSlider6" header="Fieldnumberslider6" body={sliderTemplate14} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldNumberProgressBar7" header="Fieldnumberprogressbar7" body={progressBarTemplate15} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldNumberCurrency8" header="Fieldnumbercurrency8" body={currencyTemplate16} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldDateText1" header="Fielddatetext1" body={defaultTemplate17} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldDateCalendar2" header="Fielddatecalendar2" body={p_calendarTemplate18} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldDateRange3" header="Fielddaterange3" body={calendar_rangeTemplate19} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldDateMulti4" header="Fielddatemulti4" body={calendar_multipleTemplate20} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldDateTime5" header="Fielddatetime5" body={calendar_timeonlyTemplate21} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldDateTime126" header="Fielddatetime126" body={calendar_12Template22} sortable style={{ minWidth: "8rem" }} />
<Column field="fieldDateTime247" header="Fielddatetime247" body={calendar_24Template23} sortable style={{ minWidth: "8rem" }} />
            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            {/*<Column field="createdAt" header="created" body={pCreatedAt} sortable style={{ minWidth: "8rem" }} />*/}
            {/*<Column field="updatedAt" header="updated" body={pUpdatedAt} sortable style={{ minWidth: "8rem" }} />*/}
            {/*<Column field="createdBy" header="createdBy" body={pCreatedBy} sortable style={{ minWidth: "8rem" }} />*/}
            {/*<Column field="updatedBy" header="updatedBy" body={pUpdatedBy} sortable style={{ minWidth: "8rem" }} />*/}
        </DataTable>
        </>
    );
};

export default AllfieldsDataTable;