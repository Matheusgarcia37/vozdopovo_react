export default function formatData(data: string) {
    const newData = new Date(data);
    //formatar data para o padrão brasileiro (dd/mm/yyyy hh:mm)
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    };
    return newData.toLocaleDateString('pt-BR', options as any);
}