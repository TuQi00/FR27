import fs from 'fs';

export const ConvertImage = (base64String, outputPath) => {
    try {
        const hasPrefix = base64String.startsWith('data:image/png;base64,');
        const correctedBase64 = hasPrefix ? base64String : `data:image/png;base64,${base64String}`;
        const base64Data = correctedBase64.replace(/^data:image\/\w+;base64,/, '');
        const buffer = Buffer.from(base64Data, 'base64');
        fs.writeFileSync(outputPath, buffer);
        console.log(`Hình ảnh đã được chuyển đổi và lưu thành công tại đường dẫn: ${outputPath}`);
    } catch (error) {
        console.error('Lỗi trong quá trình chuyển đổi và lưu hình ảnh:', error);
    }
};
