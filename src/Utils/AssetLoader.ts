import SocMedInterface from "../Interface/SocMedInterface";

function loadAssetByName(assets: SocMedInterface[], index: number, key?: string): Promise<string> {
    const importer = assets[index][key ?? 'logoPath'];
    return importer().then(mod => mod.default);
}

export {
    loadAssetByName
}