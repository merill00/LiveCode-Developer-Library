var omn_url = location.hostname.toLowerCase() + location.pathname.toLowerCase();
var omn_channel = "";

if(omn_url.indexOf("/directorspage") >= 0
	|| omn_url.indexOf("/about/directorscorner") >= 0)
{
    omn_channel = "director's corner";
}
else if(omn_url.indexOf("/health/public/lung/copd") >= 0)
{
    omn_channel = "copd";
}
else if(omn_url.indexOf("/educational/hearttruth") >= 0)
{
    omn_channel = "heart truth";
}
else if(omn_url.indexOf("/health/health-topics") >= 0)
{
    omn_channel = "health topics";
}
else if(omn_url.indexOf("/resources/epidemiology-forum") >= 0)
{
    omn_channel = "epi forum";
}
else if(omn_url.indexOf("/forum/epi") >=0)
{
    omn_channel = "epi forum";
}
else if(omn_url.indexOf("/about/globalhealth") >= 0)
{
    omn_channel = "global health";
}
else if(omn_url.indexOf("/health/public/heart/obesity/wecan") >= 0)
{
    omn_channel = "we can";
}
else if(omn_url.indexOf("/health/public/heart/obesity/lose_wt") >= 0)
{
    omn_channel = "aim-healthy weight";
}
else if(omn_url.indexOf("/guidelines") >= 0)
{
    omn_channel = "clinical practice guidelines";
}
else if(omn_url.indexOf("/health/prof/lung/asthma/naci") >= 0)
{
    omn_channel = "naci";
}
else if(omn_url.indexOf("/health/prof/lung/asthma/pace") >= 0)
{
    omn_channel = "pace";
}
else if(omn_url.indexOf("/health/healthdisp") >= 0)
{
    omn_channel = "health disparities";
}
else if(omn_url.indexOf("/hbp") >= 0)
{
    omn_channel = "high blood pressure";
}
else if(omn_url.indexOf("/childrenandclinicalstudies") >= 0)
{
    omn_channel = "children & clinical studies";
}
else if(omn_url.indexOf("/research/intramural") >= 0)
{
    omn_channel = "intramural research";
}
else if(omn_url.indexOf("/crg") >=0)
{
    omn_channel = "clinical research guide";
}
else if(omn_url.indexOf("healthyeating.nhlbi.nih") >=0)
{
    omn_channel = "healty eating";
}
else if(omn_url.indexOf("cvdrisk") >=0)
{
    omn_channel = "cvd risk calculator";
}
else if(omn_url.indexOf("/cgi-bin/search") >= 0)
{
    omn_channel = "Search";
}
else
{
    omn_channel = "";
}