function YandexMapsWidget(_widgetid, value)
{ 
  this.widgetid = _widgetid;
  try
  {
    var val = JSON.parse(value);
  }
  catch(e)
  {
    var val = {};
  }
  
  $("#YandexMapsWidgetInputWS_" + this.widgetid).val(val.address);
  window[this.widgetid + "_map_coords"] = val.coords;
};

YandexMapsWidget.prototype.getValue = function()
{
    return {address : $("#YandexMapsWidgetInputWS_" + this.widgetid).val(),
            coords  : window[this.widgetid + "_map_coords"]};
};

YandexMapsWidget.prototype.validate = function()
{
    return true;
};
