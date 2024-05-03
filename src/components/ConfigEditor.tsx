import React, { ChangeEvent } from 'react';
import { Button, CollapsableSection, Collapse, InlineField, InlineFieldRow, InlineSwitch, Input, SecretInput, Switch, useTheme } from '@grafana/ui';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { MyDataSourceOptions, MySecureJsonData } from '../types';
import { useState } from 'react';

interface Props extends DataSourcePluginOptionsEditorProps<MyDataSourceOptions, MySecureJsonData> {}

export function ConfigEditor(this: any, props: Props) {
  const [ activeContentIndex, setActiveContentIndex] = useState(0);
  const { onOptionsChange, options } = props;
  const { jsonData, secureJsonFields, secureJsonData } = options;
  const onPathChange = (event: ChangeEvent<HTMLInputElement>) => {
    onOptionsChange({
      ...options,
      jsonData: {
        ...jsonData,
        path: event.target.value,
      },
    });
  };

  const theme = useTheme(); 
  // Secure field (only sent to the backend)
  const onAPIKeyChange = (event: ChangeEvent<HTMLInputElement>) => {
    onOptionsChange({
      ...options,
      secureJsonData: {
        apiKey: event.target.value,
      },
    });
  };

  const onResetAPIKey = () => {
    onOptionsChange({
      ...options,
      secureJsonFields: {
        ...options.secureJsonFields,
        apiKey: false,
      },
      secureJsonData: {
        ...options.secureJsonData,
        apiKey: '',
      },
    });
  };
  const switchContainerStyle: React.CSSProperties = {
    padding: `0 ${theme.spacing.sm}`,
    height: `${theme.spacing.formInputHeight}px`,
    display: 'flex',
    alignItems: 'center',
  };

  function handleClick(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error('Function not implemented.');
  }

  function handleToggleForm(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error('Function not implemented.');
  }

  function setPassword(value: string): void {
    throw new Error('Function not implemented.');
  }

  function handleDelete(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error('Function not implemented.');
  }

  function setHeader(value: string): void {
    throw new Error('Function not implemented.');
  }

  function setValue(value: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <h3 className='page-heading'>HTTP</h3>
      <div className='gf-form-group'>
        <div className='gf-form'>
      <InlineField label="URL" labelWidth={24} interactive tooltip={'Json field returned to frontend'} className='gf-form-label width-13'>
        <div style={{ flexGrow: 1 }}>
        <Input 
          id="config-editor-path"
          onChange={onPathChange}
          value={jsonData.path}
          placeholder=""
          width={40}
        />
        </div>
      </InlineField>
      </div>
      <InlineField label="Access" labelWidth={24} interactive tooltip={'Json field returned to frontend'}>
        <Input
          id="config-editor-path"
          onChange={onPathChange}
          value={jsonData.path}
          placeholder="Server (default) "
          width={40}
        />
      </InlineField>
      <InlineField label="Allowed cookies" labelWidth={24} interactive tooltip={'Json field returned to frontend'}>
        <Input
          id="config-editor-path"
          onChange={onPathChange}
          value={jsonData.path}
          placeholder="New tag ( enter key to add)"
          width={40}
        />
      </InlineField>
      <InlineField label="Timeout" labelWidth={24} interactive tooltip={'Json field returned to frontend'}>
        <Input
          id="config-editor-path"
          onChange={onPathChange}
          value={jsonData.path}
          placeholder="Timeout in seconds"
          width={40}
        />  
      </InlineField>
      </div>
      <br />
      <h3>Auth</h3>
      <InlineField label="Basic auth" labelWidth={24} interactive tooltip={'Json field returned to frontend'}>
      <div style={{
      marginBottom: '10px'
           }}>
        <InlineFieldRow>
            <InlineSwitch  disabled={true}  />
        </InlineFieldRow>
      </div>
      </InlineField>
      <InlineField label="TLS Client Auth" labelWidth={24} interactive tooltip={'Json field returned to frontend'}>
      <div style={{
      marginBottom: '10px'
           }}>
        <InlineFieldRow>
            <InlineSwitch  disabled={true}  />
        </InlineFieldRow>
      </div>
      </InlineField>
      <InlineField label="Skip TLS Verify" labelWidth={24} interactive tooltip={'Json field returned to frontend'}>
      <div style={{
      marginBottom: '10px'
           }}>
        <InlineFieldRow>
            <InlineSwitch  disabled={true}  />
        </InlineFieldRow>
      </div>
      </InlineField>
      <InlineField label="Forward OAuth Identity" labelWidth={24} interactive tooltip={'Secure json field (backend only)'}>
      <div style={{
      marginBottom: '10px'
           }}>
        <InlineFieldRow>
            <InlineSwitch  disabled={true}  />
        </InlineFieldRow>
      </div>
      </InlineField>
      <InlineField label="With Credentials" labelWidth={24} interactive tooltip={'Secure json field (backend only)'}>
      <div style={{
      marginBottom: '10px'
           }}>
        <InlineFieldRow>
            <InlineSwitch  disabled={true}  />
        </InlineFieldRow>
      </div>
      </InlineField>
      <InlineField label="With CA Cert" labelWidth={24} interactive tooltip={'Secure json field (backend only)'}>
      <div style={{
      marginBottom: '10px'
           }}>
        <InlineFieldRow>
            <InlineSwitch  disabled={true}  />
        </InlineFieldRow>
      </div>
      </InlineField>
      <br />
      <h4>Custom HTTP Headers</h4>
      <CollapsableSection label={"+ Add Header"} isOpen={false} children={undefined}>
        <div>
            <label style={{
      marginRight: '8px'
      
           }} htmlFor="header" background-color= '#e7e7e7' ><h5>Header</h5></label>
            <input style={{
      marginRight: '8px'
      
           }}
                type="text" 
                id="header" 
                name="header"
                onChange={(e) => setHeader(e.target.value)} 
            />
            <label style={{
      marginRight: '8px'
           }} htmlFor="value"><h5>Value</h5></label>
            <input style={{
      marginRight: '8px'
      
           }}
                type="text" 
                id="value" 
                name="value"  
                onChange={(e) => setValue(e.target.value)} 
            />
            <button onClick={handleDelete}>Delete</button>
        </div>
      </CollapsableSection>
    </>
  );
}

  function useArgs(): [any, any] {
    throw new Error('Function not implemented.');
  }

  function action(arg0: string) {
    throw new Error('Function not implemented.');
  }
 