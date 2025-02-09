gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1= [];
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects2= [];
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects3= [];
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects4= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects4= [];
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1= [];
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects2= [];
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects3= [];
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects4= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects4= [];
gdjs.Untitled_32sceneCode.GDleftBorderObjects1= [];
gdjs.Untitled_32sceneCode.GDleftBorderObjects2= [];
gdjs.Untitled_32sceneCode.GDleftBorderObjects3= [];
gdjs.Untitled_32sceneCode.GDleftBorderObjects4= [];
gdjs.Untitled_32sceneCode.GDrightBorderObjects1= [];
gdjs.Untitled_32sceneCode.GDrightBorderObjects2= [];
gdjs.Untitled_32sceneCode.GDrightBorderObjects3= [];
gdjs.Untitled_32sceneCode.GDrightBorderObjects4= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects4= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects3= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects4= [];
gdjs.Untitled_32sceneCode.GDAnnouncementObjects1= [];
gdjs.Untitled_32sceneCode.GDAnnouncementObjects2= [];
gdjs.Untitled_32sceneCode.GDAnnouncementObjects3= [];
gdjs.Untitled_32sceneCode.GDAnnouncementObjects4= [];
gdjs.Untitled_32sceneCode.GDannonce_95951Objects1= [];
gdjs.Untitled_32sceneCode.GDannonce_95951Objects2= [];
gdjs.Untitled_32sceneCode.GDannonce_95951Objects3= [];
gdjs.Untitled_32sceneCode.GDannonce_95951Objects4= [];
gdjs.Untitled_32sceneCode.GDannonce_95952Objects1= [];
gdjs.Untitled_32sceneCode.GDannonce_95952Objects2= [];
gdjs.Untitled_32sceneCode.GDannonce_95952Objects3= [];
gdjs.Untitled_32sceneCode.GDannonce_95952Objects4= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDimages_95959595d_959595233filantesObjects1Objects = Hashtable.newFrom({"images_défilantes": gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.tween.tweenNumberEffectPropertyTween(runtimeScene, "initial", 1, "", "Effect", "alpha", "linear", 1);
}}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16022980);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ASAP_logo"), gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects2);
gdjs.copyArray(runtimeScene.getObjects("Announcement"), gdjs.Untitled_32sceneCode.GDAnnouncementObjects2);
gdjs.copyArray(runtimeScene.getObjects("annonce_1"), gdjs.Untitled_32sceneCode.GDannonce_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("annonce_2"), gdjs.Untitled_32sceneCode.GDannonce_95952Objects2);
{gdjs.evtTools.tween.tweenCameraZoom2(runtimeScene, "transition scale", 1.2, "foreground", "easeOutQuad", 0.5);
}{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "transition", ((( gdjs.Untitled_32sceneCode.GDannonce_95952Objects2.length === 0 ) ? (( gdjs.Untitled_32sceneCode.GDannonce_95951Objects2.length === 0 ) ? (( gdjs.Untitled_32sceneCode.GDAnnouncementObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDAnnouncementObjects2[0].getCenterXInScene()) :gdjs.Untitled_32sceneCode.GDannonce_95951Objects2[0].getCenterXInScene()) :gdjs.Untitled_32sceneCode.GDannonce_95952Objects2[0].getCenterXInScene()) + (( gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects2[0].getCenterXInScene())) / 2, (( gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects2[0].getCenterYInScene()), "foreground", "easeOutQuad", 0.5);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAnnouncementObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAnnouncementObjects2[i].getBehavior("Tween").addObjectOpacityTween2("reveal", 255, "easeOutQuad", 0.5, false);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDannonce_95951Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDannonce_95951Objects2[i].getBehavior("Tween").addObjectOpacityTween2("reveal", 255, "easeOutQuad", 0.5, false);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDannonce_95952Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDannonce_95952Objects2[i].getBehavior("Tween").addObjectOpacityTween2("reveal", 255, "easeOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.asyncCallback36850036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback36850036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback14146156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("ASAP_logo"), gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects2);
gdjs.copyArray(runtimeScene.getObjects("Announcement"), gdjs.Untitled_32sceneCode.GDAnnouncementObjects2);
gdjs.copyArray(runtimeScene.getObjects("annonce_1"), gdjs.Untitled_32sceneCode.GDannonce_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("annonce_2"), gdjs.Untitled_32sceneCode.GDannonce_95952Objects2);
{gdjs.evtTools.camera.setCameraX(runtimeScene, ((( gdjs.Untitled_32sceneCode.GDannonce_95952Objects2.length === 0 ) ? (( gdjs.Untitled_32sceneCode.GDannonce_95951Objects2.length === 0 ) ? (( gdjs.Untitled_32sceneCode.GDAnnouncementObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDAnnouncementObjects2[0].getCenterXInScene()) :gdjs.Untitled_32sceneCode.GDannonce_95951Objects2[0].getCenterXInScene()) :gdjs.Untitled_32sceneCode.GDannonce_95952Objects2[0].getCenterXInScene()) + (( gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects2[0].getCenterXInScene())) / 2, "foreground", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects2[0].getCenterYInScene()), "foreground", 0);
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback14146156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(35388556);
}
if (isConditionTrue_0) {
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1.length = 0;

{gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.func(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDimages_95959595d_959595233filantesObjects1Objects, 4, 1, 0, 250, 40, 0, "", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 720, "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 720, "foreground", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "foreground", 0);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("images_défilantes"), gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1[i].getVariables().getFromIndex(1).getAsNumber());
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1[i].addPolarForce(0, -(100), 0);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1[i].setCenterYInScene(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ASAP_logo"), gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Announcement"), gdjs.Untitled_32sceneCode.GDAnnouncementObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("annonce_1"), gdjs.Untitled_32sceneCode.GDannonce_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("annonce_2"), gdjs.Untitled_32sceneCode.GDannonce_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("images_défilantes"), gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.common.clamp(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), 800, 1400) + 300);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAnnouncementObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAnnouncementObjects1[i].setPosition((( gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1[0].getAABBRight()) + 48,(( gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1[0].getPointY("")));
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDannonce_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDannonce_95951Objects1[i].setPosition((( gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1[0].getAABBRight()) + 48,(( gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1[0].getPointY("")));
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDannonce_95952Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDannonce_95952Objects1[i].setPosition((( gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1[0].getAABBRight()) + 48,(( gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAnnouncementObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAnnouncementObjects1[i].setCenterYInScene((( gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDannonce_95952Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDannonce_95952Objects1[i].setY((( gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1[0].getCenterYInScene()) + 24);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDannonce_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDannonce_95951Objects1[i].setY(-((gdjs.Untitled_32sceneCode.GDannonce_95951Objects1[i].getHeight())) + (( gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1[0].getCenterYInScene()) - 24);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("leftBorder"), gdjs.Untitled_32sceneCode.GDleftBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("rightBorder"), gdjs.Untitled_32sceneCode.GDrightBorderObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDleftBorderObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDleftBorderObjects1[i].getBehavior("Resizable").setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDrightBorderObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDrightBorderObjects1[i].getBehavior("Resizable").setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDleftBorderObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDleftBorderObjects1[i].setY(0);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDrightBorderObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDrightBorderObjects1[i].setY(0);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDleftBorderObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDleftBorderObjects1[i].getBehavior("Resizable").setWidth((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (( gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1[0].getWidth())) / 2 + 1);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDrightBorderObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDrightBorderObjects1[i].getBehavior("Resizable").setWidth((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (( gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1[0].getWidth())) / 2 + 1);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDrightBorderObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDrightBorderObjects1[i].setX((( gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1[0].getAABBRight()));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDleftBorderObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDleftBorderObjects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNewTextObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects1[i].getBehavior("Text").setText("");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.tween.sceneTweenHasFinished(runtimeScene, "initial");
if (isConditionTrue_0) {
{gdjs.evtTools.tween.removeSceneTween(runtimeScene, "initial");
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects1);

const repeatCount2 = Math.ceil(((gdjs.Untitled_32sceneCode.GDNewTextObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewTextObjects1[0].getVariables()).getFromIndex(0).getAsNumber() / 100);
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDNewTextObjects1, gdjs.Untitled_32sceneCode.GDNewTextObjects2);


let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects2[i].getBehavior("Text").setText(gdjs.Untitled_32sceneCode.GDNewTextObjects2[i].getBehavior("Text").getText() + (gdjs.Untitled_32sceneCode.GDNewTextObjects2[i].getVariables().getFromIndex(0).getAsString() + gdjs.evtTools.string.newLine()));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects2[i].getBehavior("Text").setText(gdjs.Untitled_32sceneCode.GDNewTextObjects2[i].getBehavior("Text").getText() + (gdjs.evtsExt__ExtendedMath__ToFixedString.func(runtimeScene, (gdjs.Untitled_32sceneCode.GDNewTextObjects2[i].getVariables().getFromIndex(0).getAsNumber()) / 10, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + gdjs.evtTools.string.newLine()));
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ASAP_logo"), gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1[k] = gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://monasap.org/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("annonce_1"), gdjs.Untitled_32sceneCode.GDannonce_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDannonce_95951Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDannonce_95951Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDannonce_95951Objects1[k] = gdjs.Untitled_32sceneCode.GDannonce_95951Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDannonce_95951Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://monasap.org/2025/02/09/nouvelle-piece-carnaval-soleil/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("annonce_2"), gdjs.Untitled_32sceneCode.GDannonce_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDannonce_95952Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDannonce_95952Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDannonce_95952Objects1[k] = gdjs.Untitled_32sceneCode.GDannonce_95952Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDannonce_95952Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://monasap.org/2025/02/09/nouvelle-piece-rimes-melodies/", runtimeScene);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDleftBorderObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDleftBorderObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDleftBorderObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDleftBorderObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDrightBorderObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDrightBorderObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDrightBorderObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDrightBorderObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDAnnouncementObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAnnouncementObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAnnouncementObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDAnnouncementObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDannonce_95951Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDannonce_95951Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDannonce_95951Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDannonce_95951Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDannonce_95952Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDannonce_95952Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDannonce_95952Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDannonce_95952Objects4.length = 0;

gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDleftBorderObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDleftBorderObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDleftBorderObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDleftBorderObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDrightBorderObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDrightBorderObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDrightBorderObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDrightBorderObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDAnnouncementObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAnnouncementObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAnnouncementObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDAnnouncementObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDannonce_95951Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDannonce_95951Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDannonce_95951Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDannonce_95951Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDannonce_95952Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDannonce_95952Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDannonce_95952Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDannonce_95952Objects4.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
