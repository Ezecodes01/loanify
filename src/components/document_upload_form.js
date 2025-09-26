import React from 'react';

export default function DocumentForm({ documentData, setDocumentData }) {
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            setDocumentData(prevData => ({ ...prevData, [name]: files[0] }));
        }
    };

    const getFileName = (file) => (file ? file.name : 'No file selected');

    return (
        <div className="form-step active" data-step="4">
            <h3 style={{ marginBottom: '2rem', color: '#2d3748', fontSize: '1.5rem' }}>Document Upload</h3>
            <div className="form-group">
                <label>Identity Proof</label>
                <div className="file-upload">
                    <input type="file" id="idProof" name="idProof" accept=".pdf,.jpg,.png" onChange={handleFileChange} required />
                    <div className="file-upload-label">
                        <div>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📄</div>
                            <div>{getFileName(documentData.idProof)}</div>
                            <div style={{ fontSize: '0.9rem', color: '#a0aec0', marginTop: '0.5rem' }}>PDF, JPG, PNG (Max 5MB)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label>Income Proof</label>
                <div className="file-upload">
                    <input type="file" id="incomeProof" name="incomeProof" accept=".pdf,.jpg,.png" onChange={handleFileChange} required />
                    <div className="file-upload-label">
                        <div>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💰</div>
                            <div>{getFileName(documentData.incomeProof)}</div>
                            <div style={{ fontSize: '0.9rem', color: '#a0aec0', marginTop: '0.5rem' }}>PDF, JPG, PNG (Max 5MB)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label>Bank Statement</label>
                <div className="file-upload">
                    <input type="file" id="bankStatement" name="bankStatement" accept=".pdf" onChange={handleFileChange} required />
                    <div className="file-upload-label">
                        <div>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏦</div>
                            <div>{getFileName(documentData.bankStatement)}</div>
                            <div style={{ fontSize: '0.9rem', color: '#a0aec0', marginTop: '0.5rem' }}>PDF (Max 5MB)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}