gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1= [];
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1= [];
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects2= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDimages_95959595d_959595233filantesObjects1Objects = Hashtable.newFrom({"images_défilantes": gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9498980);
}
if (isConditionTrue_0) {
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1.length = 0;

{gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.func(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDimages_95959595d_959595233filantesObjects1Objects, 4, 1, 0, 0, 40, 0, "", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 720, "", 0);
}{gdjs.evtTools.tween.tweenNumberEffectPropertyTween(runtimeScene, "linear", 1, "", "Effect", "alpha", "linear", 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("images_défilantes"), gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1[i].getVariables().getFromIndex(1).getAsNumber());
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ASAP_logo"), gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("images_défilantes"), gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 2);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
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
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDimages_9595d_95233filantesObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDASAP_9595logoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
