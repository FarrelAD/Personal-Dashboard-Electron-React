export default interface SocMedInterface {
    name: string;
    logoPath: () => Promise<{ default: string }>;
    url: string
}